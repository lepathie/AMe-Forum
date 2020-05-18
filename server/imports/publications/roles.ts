Meteor.publish(null, () => {
    if (this.userId) {
      return Meteor.roleAssignment.find({ 'user._id': this.userId })
    } else {
      this.ready()
    }
})
