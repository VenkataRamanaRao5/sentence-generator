package sentences

import scala.scalajs.js.annotation.JSExportTopLevel

val OPTIONAL_EXPANSION_PROBABILITY = 0.66667

/**
 * Essentially a Bernoulli trial. Succes (true) with given `probability`.
 * 0 <= Math.random < 1 So, `trial(1)` will always return 1 (as it should).
 * @param probability The probability of success
 * @returns the outcome of the trial
 */
def trial(probability: Double): Boolean =
    return Math.random() < probability

/**
 * Base symbol type. This can either expand to clauses via rules, or a terminal symbol.
 * This will be inherited by specific symbols who, if they are leaf symbols, define the 
 * terminals they can expand to.
 */
trait Symbol:
  def name = this.getClass.getSimpleName.replaceAll("\\$", "")
  def rules: Vector[Expansion]

  lazy val totalWeight = rules.map(_.weight).sum

  def expand: Vector[Symbol] =
    val randomNumber = Math.random() * totalWeight
    val cumsum = rules.map(_.weight).scan(0)(_ + _).tail
    val rule = rules.zip(cumsum).find(_._2 > randomNumber).map(_._1)
    println(s"${this.toString()} -> ${rule.map(_.expression.mkString(", ")).getOrElse("")}")
    rule.fold(Vector(this))(_.expression.flatMap(_.expand))

  override def toString() = this.name

end Symbol

class Expansion(val expression: Vector[Symbol], val weight: Int = 1):
  def this(expression: Symbol) = this(Vector(expression), 1)
  def this(expression: Symbol, weight: Int) = this(Vector(expression), weight)

case class Token(override val name: String) extends Symbol:
  def rules = Vector.empty


@JSExportTopLevel("generateSentence")
def generateSentence(): String = {
  Sentence.expand.mkString("", " ", ".").replaceAll(" \b", "").capitalize
}