import React, {Component} from 'react'

class PublicProfile extends Component{
  render(){
    return(
      <div>
        <div id="profilePage">
          <div class="container">
            <img src="https://www.proflowers.com/blog/wp-content/uploads/2014/03/tulip-thumbnail-350x240.jpg" width="100" alt="profile-img"/>
            <h2>Austin</h2>
            <p>Current City: San Francisco</p>
            <div class="postSummary">
              <p>Here are my posts! </p>
              <p>Here are my posts! </p>
              <p>Here are my posts! </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PublicProfile