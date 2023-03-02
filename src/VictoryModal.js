import React from "react";
import './VictoryModal.css';

function VictoryModal({hideModal}) {
    const url = Math.random() > .9 ? "https://tinyurl.com/2jr5bcx6" : "https://tinyurl.com/3nrzcpes";
    return (
        <div className="victory-modal-wrapper" onClick={hideModal}>
            <div className="victory-modal__close" />
            <a className="victory-modal__secret-link" target="_blank" href={url}>
                <img src="https://media1.giphy.com/media/BPJmthQ3YRwD6QqcVD/giphy.gif" className="victory-modal" onClick={e => e.stopPropagation()} />
            </a>
        </div>
    )
}

export default VictoryModal;
