export const leftAction = (_this) => {
  return (dispatch, getState) => {
    _this.props.history.goBack()
  }
}

export const gotoCreateNewScreen = (_this) => {
  return (dispatch, getState) => {
    _this.props.history.push('/mainTabbar')
  }
}

export const gotoRestoreScreen = (_this) => {
  return (dispatch, getState) => {
    _this.props.history.push('/restoreScreen')
  }
}
