import React from 'react'
import { AutoSizer } from 'react-virtualized/dist/commonjs/AutoSizer'
import { List as VList } from 'react-virtualized/dist/commonjs/List'
import { CellMeasurerCache, CellMeasurer } from 'react-virtualized/dist/commonjs/CellMeasurer'
import ReactHeight from 'react-height'
import Student from './Student'
class StudentList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            heights:[]
        }
    }
    measureCache = new CellMeasurerCache({
        fixedWidth: true,
        minHeight: 58
    })
    getList = () => {
        setTimeout(() => {
          this.setState({
            list: [
              {name: 'fang1', age: 20},
              {name: 'fang2', age: 20},
              {name: 'fang3', age: 20},
              {name: 'fang4', age: 20},
              {name: 'fang5', age: 20},
              {name: 'fang6', age: 20},
              {name: 'fang7', age: 20},
              {name: 'fang8', age: 20},
              {name: 'fang9', age: 20},
              {name: 'fang10', age: 20},
              {name: 'fang11', age: 20},
              {name: 'fang12', age: 20},
              {name: 'fang13', age: 20},
              {name: 'fang14', age: 20},
              {name: 'fang15', age: 20},
              {name: 'fang16', age: 20},
              {name: 'fang17', age: 20},
              {name: 'fang1', age: 20},
              {name: 'fang2', age: 20},
              {name: 'fang3', age: 20},
              {name: 'fang4', age: 20},
              {name: 'fang5', age: 20},
              {name: 'fang6', age: 20},
              {name: 'fang7', age: 20},
              {name: 'fang8', age: 20},
              {name: 'fang9', age: 20},
              {name: 'fang10', age: 20},
              {name: 'fang11', age: 20},
              {name: 'fang12', age: 20},
              {name: 'fang13', age: 20},
              {name: 'fang14', age: 20},
              {name: 'fang15', age: 20},
              {name: 'fang16', age: 20},
              {name: 'fang17', age: 20}
            ]
          })
        }, 1000);
    }
    componentDidMount() {
        this.getList()
    }
    handleHeightReady = (height, index) => {
        const heights = [...this.state.heights]
        heights.push({
            index,
            height
        })
        this.setState({
            heights
        }, this.VList.recomputeRowHeights(index))
    }
    getRowHeight = ({ index }) => {
        const row = this.state.heights.find(item => item.index === index)
        return row ? row.height : 100
    }
    render() {
        const { list } = this.state  
        const renderItem = ({ index, key, style }) => {
            if (this.state.heights.find(item => item.index === index)) {
                return <Student key={key} student={list[index]} />
            }
            return (
                <div key={key} style={style}>
                    <ReactHeight
                        onHeightReady={height => {
                            this.handleHeightReady(height, index)
                        }}
                    >
                        <Student key={key} student={list[index]} />
                    </ReactHeight>
                </div>
            )
        }
        return (
            <div style={{display:'flex', flex: 1}}>
                <AutoSizer>
                    {({ width, height }) => (
                        <VList
                            ref={ref => this.VList = ref}
                            width={width}
                            height={height}
                            overscanRowCount={10}
                            rowCount={list.length}
                            rowHeight={this.getRowHeight}
                            rowRenderer={renderItem}
                        />
                    )}
                </AutoSizer>
            </div>
        )
    }
}
export default StudentList