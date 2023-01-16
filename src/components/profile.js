import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
        <div class="card text-center">
            <div class="card-header">
                My Profile
            </div>
            <div class="card-body">
                <h5 class="card-title">SITI NUR ALISHA BINTI CHE YAACOB</h5>
                <p class="card-text">Bachelor of Software Engineering(Educational Software)(Hons)</p>
                <p class="card-text">Universiti Pendidikan Sultan Idris(UPSI)</p>
                <a href="#" class="btn btn-primary">ACCEPT</a>
            </div>
            <div class="card-footer text-muted">
            Edited 2 days ago
            </div>
        </div>
          )
    }
  
}