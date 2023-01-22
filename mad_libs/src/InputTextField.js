
export function InputTextField({get, set, partOfSpeech}) {

    return (
        <div>
            <label htmlFor="word1">{partOfSpeech}</label>
        <br/>
        <input 
        id="word1"
        type="text"
        placeholder={partOfSpeech} 
        value={get}
        
        onChange={(e) => {

          set(e.target.value);
        }}
        />
        </div>
    )
}