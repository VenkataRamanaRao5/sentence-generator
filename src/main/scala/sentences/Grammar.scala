package sentences

given Conversion[String, Token] = Token(_)

object Comma extends Token("\b,")

object SingularNoun extends Symbol:
  def rules = Vector(
    Expansion("computer", 5),
    Expansion("boy", 7),
    Expansion("horse", 3),
    Expansion("potato", 6),
    Expansion("girl", 5),
    Expansion("house", 3),
    Expansion("bird", 6),
    Expansion("shaft", 2),
    Expansion("book", 7),
    Expansion("witch", 4),
    Expansion("moron", 1),
    Expansion("god", 1)
  )

object PluralNoun extends Symbol:
  def rules = Vector(
    Expansion("work", 4),
    Expansion("men", 3),
    Expansion("cattle", 4),
    Expansion("water", 2),
    Expansion("holes", 4),
    Expansion("pens", 2),
    Expansion("ladies", 3),
    Expansion("people", 4),
    Expansion("children", 3)
  )

object Pronoun extends Symbol:
  def rules = Vector(
    Expansion("he", 3),
    Expansion("she", 3),
    Expansion("it", 1),
    Expansion("they", 2)
  )

object TransitiveVerb extends Symbol:
  def rules = Vector(
    Expansion("wrote", 21),
    Expansion("licked", 9),
    Expansion("fucked", 1),
    Expansion("ate", 15),
    Expansion("rode", 9),
    Expansion("surprised", 15),
    Expansion("constructed", 18),
    Expansion("reviewed", 15),
    Expansion("said", 21),
    Expansion("called", 21)
  )

object IntransitiveVerb extends Symbol:
  def rules = Vector(
    Expansion("flew", 4),
    Expansion("moaned", 1),
    Expansion("came", 3),
    Expansion("went", 4),
    Expansion("slept", 2),
    Expansion("watched", 3),
    Expansion("gave", 2),
    Expansion("fell", 1)
  )

object Adverb extends Symbol:
  def rules = Vector(
    Expansion("loudly", 6),
    Expansion("softly", 7),
    Expansion("quietly", 7),
    Expansion("beautifully", 6),
    Expansion("wistfully", 4),
    Expansion("fast", 7),
    Expansion("happily", 8),
    Expansion("innocently", 4),
    Expansion("angrily", 1),
    Expansion("yesterday", 5),
    Expansion("next year", 4),
    Expansion("here", 5),
    Expansion("above", 3),
    Expansion("well", 4),
    Expansion("often", 5),
    Expansion("rarely", 4)
  )

object Article extends Symbol:
  def rules = Vector(
    Expansion("a", 1),
    Expansion("the", 2)
  )

object Adjective extends Symbol:
  def rules = Vector(
    Expansion("sharp", 6),
    Expansion("horny", 2),
    Expansion("amazing", 4),
    Expansion("intelligent", 3),
    Expansion("wet", 2),
    Expansion("loud", 4),
    Expansion("sweet", 5),
    Expansion("beautiful", 6)
  )

object CoordinatingConjunction extends Symbol:
  def rules = Vector(
    Expansion("and", 8),
    Expansion("but", 7),
    Expansion("so", 6),
    Expansion("for", 2),
    Expansion("or", 4),
    Expansion("or", 3)
  )

object SubordinatingConjunction extends Symbol:
  def rules = Vector(
    Expansion("before", 6),
    Expansion("when", 6),
    Expansion("that", 7),
    Expansion("since", 5),
    Expansion("because", 7),
    Expansion("though", 6),
    Expansion("even though", 4),
    Expansion("where", 5),
    Expansion("so that", 1),
    Expansion("while", 3)
  )

object Preposition extends Symbol:
  def rules = Vector(
    Expansion("at", 4),
    Expansion("in", 5),
    Expansion("on", 3),
    Expansion("out", 3),
    Expansion("in front of", 1),
    Expansion("on top of", 2),
    Expansion("behind", 1),
    Expansion("to", 4),
    Expansion("into", 2),
    Expansion("with", 2),
    Expansion("for", 4)
  )

object PresentTense extends Symbol:
  def rules = Vector(
    Expansion("tell", 30),
    Expansion("call", 27),
    Expansion("nut", 12),
    Expansion("fuck", 1),
    Expansion("beat", 12),
    Expansion("write", 24),
    Expansion("go", 21),
    Expansion("come", 24)
  )



object Noun extends Symbol:
  def rules = Vector(
    Expansion(SingularNoun, 1),
    Expansion(PluralNoun, 1)
  )

object Verb extends Symbol:
  def rules = Vector(
    Expansion(TransitiveVerb, 2),
    Expansion(IntransitiveVerb, 1)
  )

object PrepositionalPhrase extends Symbol:
  def rules = Vector(
    Expansion(Vector(Preposition, Object), 5),
    Expansion(Vector(Preposition, Adverb), 3),
  )




object Sentence extends Symbol:
  def rules = Vector(
    Expansion(SimpleSentence, 4),
    Expansion(ComplexSentence, 3),
    Expansion(CompoundSentence, 2),
  )

object SimpleSentence extends Symbol:
  def rules = Vector(
    Expansion(IndependentClause, 7),
    Expansion(ImperativeSentence, 2)
  )

object ComplexSentence extends Symbol:
  def rules = Vector(
    Expansion(Vector(IndependentClause, Comma, DependentClause), 3),
    Expansion(Vector(DependentClause, Comma, IndependentClause), 2),
  )
    
object CompoundSentence extends Symbol:
  def rules = Vector(
    Expansion(Vector(IndependentClause, Comma, CoordinatingConjunction, IndependentClause))
  )

object ImperativeSentence extends Symbol:
  def rules = Vector(
    Expansion(Vector(PresentTense, Subject))
  )


object IndependentClause extends Symbol:
  def rules = Vector(
    Expansion(Vector(Subject, Predicate), 7),
  )
    
object DependentClause extends Symbol:
  def rules = Vector(
    Expansion(Vector(SubordinatingConjunction, IndependentClause))
  )

object Subject extends Symbol:
  def rules = Vector(
    Expansion(Pronoun, 5),
    Expansion(Object, 8)
  )

object Object extends Symbol:
  def rules = Vector(
    Expansion(NounPhrase, 1),
  )

object NounPhrase extends Symbol:
  def rules = Vector(
    Expansion(PluralNoun, 2),
    Expansion(Vector(Adjective, PluralNoun), 3),
    Expansion(Vector(Article, SingularNoun), 5),
    Expansion(Vector(Token("the"), PluralNoun), 5),
    Expansion(Vector(Article, Adjective, SingularNoun), 2),
    Expansion(Vector(Token("the"), Adjective, PluralNoun), 3),
  )

object Predicate extends Symbol:
  def rules = Vector(
    Expansion(IntransitiveVerb, 12),
    Expansion(Vector(Verb, Adverb), 10),
    Expansion(Vector(TransitiveVerb, Object), 15),
    Expansion(Vector(TransitiveVerb, Object, PrepositionalPhrase), 14),
    Expansion(Vector(TransitiveVerb, Object, Adverb), 12),
    Expansion(Vector(TransitiveVerb, Object, Adverb), 13),
    Expansion(Vector(IntransitiveVerb, PrepositionalPhrase), 11),
  )