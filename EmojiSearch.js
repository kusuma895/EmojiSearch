import React,{useState} from 'react'
import './Emoji.css'
const emojiData = [
    {
        id : 1,
        symbol:"😀",
        name : "grinning Face"
    },
    {
        id : 2,
        symbol:"😂",
        name : "laughing Face"
    },
    {
        id : 3,
        symbol:"😱",
        name : "Shocking"
    },
    {
        id : 4,
        symbol:"🤨",
        name : "Serious"
    },
    {
        id : 5,
        symbol:"🥳",
        name : "party"
    },
    {
        id : 6,
        symbol:"😡",
        name : "anger face"
    },
    {
        id : 7,
        symbol:"😭",
        name : "CryingFace"
    },
    {
        id : 8,
        symbol:"😘",
        name : "kiss Face"
    },
    {
        id : 9,
        symbol:"😁",
        name : "Smiling Face with teeth"
    },
    {
        id : 10,
        symbol:"😞",
        name : "Sad Face"
    },

];

function EmojiSearch() {
    const [searchEmoji,setSearchEmoji] = useState("");
    const handleChange = (e) =>{
        setSearchEmoji(e.target.value);
    }
    const showEmoji = emojiData.filter((emoji) => {
        const  emojiName = emoji.name.toLowerCase();
        return(emojiName.includes(searchEmoji.toLowerCase()));
    });
  return (
    <body>
    <div class="container">
       
    
        <h1>EmojiSearch!!</h1>
        <input type='text' placeholder='Search for emoji.....' value={searchEmoji} onChange={handleChange}/>
        <div id='emojis'>
              {showEmoji.map((emoji) => emoji.symbol)}
        </div>
       </div>
       </body>
  )
}

export default EmojiSearch