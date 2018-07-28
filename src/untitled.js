timer2() {
    let newColumn = this.state.thisCol;
    let newRow = this.state.thisRow;

    if (
      this.state.allBlocks[this.state.thisRow] &&
      this.state.allBlocks[this.state.thisRow].length - 1 > this.state.thisCol
    )
      newColumn = this.state.thisCol + 1;
    else newColumn = 0;

    if (
      this.state.allBlocks[this.state.thisRow] &&
      this.state.allBlocks[this.state.thisRow].length - 1 <
        this.state.thisCol + 1 &&
      this.state.thisRow + 1 < this.state.allBlocks.length
    )
      newRow = this.state.thisRow + 1;
    else newRow = -1;
    if (this.state.thisRow > -1) {
      let blocks = this.state.allBlocks.map((block, rowindex) => {
        return block.map((column, colindex) => {
          return {
            ...column,
            color:
              this.state.thisRow === rowindex && this.state.thisCol === colindex
                ? "red"
                : "blue"
          };
        });
      });
      this.setState({ allBlocks: blocks, thisCol: newColumn, thisRow: newRow });
    }
  }