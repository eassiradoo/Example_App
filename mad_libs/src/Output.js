export function Output({adverb, noun, verb}) {
    return (
        <div className="output">
            "heyyy <span>{adverb ? adverb : "___"}</span>"
        </div>
    );
}