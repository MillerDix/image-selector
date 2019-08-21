import React from 'react';

const styles = {
  imgWrapper: {
    display: 'inlineBlock',
  },
  imgEl: {
    width: 200,
    height: 200,
  },
}

//   this.pictures = [
//     {
//       id: '1',
//       name: 'foo',
//       url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
//     },
//     {
//       id: '2',
//       name: 'foo',
//       url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
//     },
//     {
//       id: '3',
//       name: 'foo',
//       url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
//     },
//   ];

class PictureSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectAll: false,
      selectedIds: [],
    };
  }

  selectItem = id => {
    // if(this.state.selectedIds.indexOf(id) !== -1) {
    //   this.setState(prev => {
    //     prev.selectedIds.push(id);
    //     return prev;
    //   });
    // }

    // this.setState(prev => {
    //   prev.selectedIds.splice(id);
    //   return prev;
    // });

    this.setState(prev => {
      if(this.state.selectedIds.indexOf(id) !== -1) {
        prev.selectedIds.push(id);
      }
      prev.selectedIds.splice(id);

      this.props.selectedIdsOnChange(prev.selectedIds);
      return prev;
    });

    // this.selectedIdsOnChange();
  }

  selectAll = () => {
    if(this.state.selectAll) {
      this.setState({ selectedIds: [] });
    }

    const allIds = this.props.pictures.reduce((prev, cur) => {
      return cur.push(prev.id);
    }, [])
    this.setState({ selectedIds: allIds });
  }

  renderPics = pictures => {
    const { selectedIds } = this.state;
    return pictures.map((item) => {
      const isIn = selectedIds.indexOf(item.id) !== -1;
        return (
          <div className={styles.imgWrapper} onClick={() => this.selectItem(item.id)} >
            <p>{isIn ? '选中' : '未选中'}</p>
            <img className={styles.imgEl} src={item.url} alt="加载失败" />)
          </div>
        );
      });
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div onClick={this.selectAll}>select all</div>
        {this.renderPics(this.props.pictures)}
      </div>
    );
  }
}

export default PictureSelect;
