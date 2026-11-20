import { useState, useContext, memo } from "react"
import { SettingsContext } from "../SettingsContext"

function NoteCard({ id, title, body, onDelete }) {
    const [showMore, setShowMore] = useState(false)
    const { largeText } = useContext(SettingsContext)

    return (
    <div>
      <h3
        className={
          largeText
           ? 'pr-8 text-[28px] font-normal break-words' 
           : 'pr-8 text-[22px] font-normal break-words'
        }
      >
        {title}
      </h3>
      {showMore && (
        <p
          className={
             largeText 
             ? 'mt-3 text-[21px] break-words whitespace-pre-wrap text-[#4d4d4d]' 
             : 'mt-3 text-[17px] break-words whitespace-pre-wrap text-[#4d4d4d]'
          }
        >
          {body}
        </p>

      )}
      <button
        type="button"
        className="mt-3 cursor-pointer text-[15px] font-normal text-[#b83f45] underline"
        onClick={() => setShowMore((prev) => !prev)}
      >
        {showMore ? "Show less" : "Show more"}
      </button>
      <button
        type="button"
        onClick={() => onDelete(id)}
        className="absolute top-4 right-5 cursor-pointer text-[26px] leading-none text-[#949494] hover:text-[#c18585]"
        >
          ×
        </button>
    </div>
  )
}
 
export default memo(NoteCard)