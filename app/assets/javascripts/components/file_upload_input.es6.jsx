class FileUploadInput extends React.Component {
  handleSubmit () {
    console.log('Submitted')
  }

  render () {
    return (
      <form ref="form" className="upload-form" action={ this.props.form.action } acceptCharset="UTF-8" method="post" onSubmit={ this.handleSubmit }>
        <div class="form-group">
          <label for={this.props.fieldName}>{this.props.labelText}</label>
          <input name={this.props.fieldName} placeholder={this.props.placeHolder} />
        </div>
        <button type="submit">Upload file</button>
      </form>
    )
  }
}

FileUploadInput.propTypes = {
  labelText: React.PropTypes.string.isRequired,
  fieldName: React.PropTypes.string.isRequired,
  placeHolder: React.PropTypes.string.isRequired,
  form: React.PropTypes.node.isRequired
};
