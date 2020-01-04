import { connect } from 'react-redux'
import Toast from './Toast'
import { Dispatch } from 'redux'
import { hideToast } from './state/actions'

const mapStateToProps = (state: any) => {
  const { show, type, message } = state.toast

  return { show, type, message }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  hideToast: () => dispatch(hideToast())
})

export default connect(mapStateToProps, mapDispatchToProps)(Toast)
