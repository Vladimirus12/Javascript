'use strict';

/**
 * @property {HTMLElement} gameContainerEl Контейнер игры (DOM элемент).
 */
const chess = {
    gameContainerEl: document.getElementById('game'),
    figures: [
        {name: 'pawn', color: 'White', pos: 'A2'},
        {name: 'pawn', color: 'White', pos: 'B2'},
        {name: 'pawn', color: 'White', pos: 'C2'},
        {name: 'pawn', color: 'White', pos: 'D2'},
        {name: 'pawn', color: 'White', pos: 'E2'},
        {name: 'pawn', color: 'White', pos: 'F2'},
        {name: 'pawn', color: 'White', pos: 'G2'},
        {name: 'pawn', color: 'White', pos: 'H2'},
        {name: 'rook', color: 'White', pos: 'A1'},
        {name: 'kNight', color: 'White', pos: 'B1'},
        {name: 'bishop', color: 'White', pos: 'C1'},
        {name: 'queen', color: 'White', pos: 'D1'},
        {name: 'king', color: 'White', pos: 'E1'},
        {name: 'bishop', color: 'White', pos: 'F1'},
        {name: 'kNight', color: 'White', pos: 'G1'},
        {name: 'rook', color: 'White', pos: 'H1'},

        {name: 'pawn', color: 'Black', pos: 'A7'},
        {name: 'pawn', color: 'Black', pos: 'B7'},
        {name: 'pawn', color: 'Black', pos: 'C7'},
        {name: 'pawn', color: 'Black', pos: 'D7'},
        {name: 'pawn', color: 'Black', pos: 'E7'},
        {name: 'pawn', color: 'Black', pos: 'F7'},
        {name: 'pawn', color: 'Black', pos: 'G7'},
        {name: 'pawn', color: 'Black', pos: 'H7'},
        {name: 'rook', color: 'Black', pos: 'A8'},
        {name: 'kNight', color: 'Black', pos: 'B8'},
        {name: 'bishop', color: 'Black', pos: 'C8'},
        {name: 'queen', color: 'Black', pos: 'D8'},
        {name: 'king', color: 'Black', pos: 'E8'},
        {name: 'bishop', color: 'Black', pos: 'F8'},
        {name: 'kNight', color: 'Black', pos: 'G8'},
        {name: 'rook', color: 'Black', pos: 'H8'},
    ],
    figureHTML: {
        pawnWhite: '&#9817;',
        rookWhite: '&#9814;',
        kNightWhite: '&#9816;',
        bishopWhite: '&#9815;',
        queenWhite: '&#9813;',
        kingWhite: '&#9812;',

        pawnBlack: '&#9823;',
        rookBlack: '&#9820;',
        kNightBlack: '&#9822;',
        bishopBlack: '&#9821;',
        queenBlack: '&#9819;',
        kingBlack: '&#9818;',
    },

    renderMap() {
        const rows = [0, 8, 7, 6, 5, 4, 3, 2, 1, 0];
        const cols = [0, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 0];

        for (let row = 0; row < rows.length; row++) {
            const tr = document.createElement('tr');
            this.gameContainerEl.appendChild(tr);

            for (let col = 0; col < cols.length; col++) {
                const td = document.createElement('td');
                tr.appendChild(td);

                td.dataset.row = rows[row];
                td.dataset.col = cols[col];

                if (rows[row] === 0 && cols[col] !== 0) {
                    td.innerText = cols[col];
                } else if (cols[col] === 0 && rows[row] !== 0) {
                    td.innerText = rows[row];
                }

                if (this.isCellIsBlack(row, col)) {
                    td.style.backgroundColor = 'grey';
                }
            }
        }
    },

    /**
     * Определяет является ли ячейка черной.
     * @param {int} rowNum Номер в строке.
     * @param {int} colNum Номер в колонке.
     * @returns {boolean} true, если ячейка должна быть черной, иначе false.
     */
    isCellIsBlack(rowNum, colNum) {
        if (rowNum === 0 || rowNum === 9 || colNum === 0 || colNum === 9) {
            return false;
        }

        return (rowNum % 2 === 0 && colNum % 2 === 1) || (colNum % 2 === 0 && rowNum % 2 === 1);
    },

    renderFigures() {
        for (const figure of this.figures) {
            const col = figure.pos.charAt(0);
            const row = figure.pos.charAt(1);

            document.querySelector(`[data-col='${col}'][data-row='${row}']`).innerHTML =
                this.figureHTML[figure.name + figure.color];
        }
    }
};

chess.renderMap();
chess.renderFigures();