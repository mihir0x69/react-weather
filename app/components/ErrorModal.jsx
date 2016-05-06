var React = require('react');

module.exports = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  getDefaultProps: function(){
    return{
      title: 'Error'
    }
  },
  componentDidMount: function(){
    var modal =new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function(){
    return(
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
          <h4>{this.props.title}</h4>
          <p>{this.props.message}</p>
          <p><button className="button hollow" data-close="">Okay</button></p>
      </div>
    );
  }
});
