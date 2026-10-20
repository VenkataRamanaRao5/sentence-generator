package sentences

import org.scalajs.dom
import org.scalajs.dom.document

def main(args: Array[String]): Unit = {
    val root = document.getElementById("sentence")

    println(root)
    root.innerText = generateSentence()
    
}