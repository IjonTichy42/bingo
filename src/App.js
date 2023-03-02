import React, {useState, useMemo} from 'react';
import './App.css';
import VictoryModal from "./VictoryModal";
import words from "./words";

function App() {
    const [usedWords, setUsedWords] = useState([])
    const [showVictory, setShowVictory] = useState(true)
    const bingoWords = useMemo(() => {
        const wordsClone = words.slice(0) // to deal with https://github.com/facebook/react/issues/24935
        const wordsList = []
        for (let i = 0; i < 9; i++) {
            const index = Math.floor(Math.random() * wordsClone.length);
            wordsList.push(wordsClone[index]);
            wordsClone.splice(index, 1);
        }
        return wordsList
    }, [])
    return (
        <div className="App">
            <div className="bingo">
                {bingoWords.map((word) => {
                    return (
                        <div key={word} className="bingo__cell" onClick={() => {
                            setUsedWords([...usedWords, word])
                        }}>
                            {word}
                            {usedWords.includes(word) && <div className="cross" />}
                        </div>
                    )
                })}
            </div>
            {usedWords.length === 9 && showVictory && <VictoryModal hideModal={() => setShowVictory(false)} />}
        </div>
    );
}

export default App;
