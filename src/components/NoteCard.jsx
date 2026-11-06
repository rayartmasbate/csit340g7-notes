import { useState } from "react"

function NoteCard({ title, body }) {
    const [showMore, setShowMore] = useState(false)

    return (
    <div>
      <h3 className="pr-8 text-[22px] font-normal break-words">{title}</h3>
      {showMore && (
        <p className="mt-2 text-[#949494] break-words">{body}</p>
      )}
      <button
        type="button"
        className="mt-3 cursor-pointer text-[15px] font-normal text-[#b83f45] underline"
        onClick={() => setShowMore((prev) => !prev)}
      >
        {showMore ? "Show less" : "Show more"}
      </button>
    </div>
  )
}
 
export default NoteCard