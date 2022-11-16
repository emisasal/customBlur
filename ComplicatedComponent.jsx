import { useState } from "react"
import CantMakeBlur from "someDependency"
import styles from "./complicatedComponent.module.css"

const ComplicatedComponent = () => {
  const [expanded, setExpanded] = useState(false)
  const ref = useRef(null)

  // here starts the magic //
  const handleCustomBlur = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setExpanded(false)
    }
  }

  document.addEventListener("click", handleCustomBlur, false)
  // until here //
  
  return (
    <>
      <div className={styles.container} ref={ref}>
        <span className={styles.title} onClick={() => setExpanded(!expanded)}>
          {"Title for dropdown"}
        </span>

        {expanded && (
          <div className={styles.dropdown}>
            <CantMakeBlur />
          </div>
        )}
      </div>
    </>
  )
}

export default ComplicatedComponent
