import React from 'react'
import "./DiscriptionBox.css"

const DiscriptionBox = () => {
  return (
    <div className="container mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-2 col-sm-4 col-4  border border-2 pt-3 pb-2 text-center">
          <h6>Description</h6>
        </div>
        <div className="col-md-3 col-lg-2 col-sm-4 col-4 border border-2 pt-3 pb-2 text-center">
          <h6>Reviews(122)</h6>
        </div>
      </div>
      <div className="row">
        <div className="col-12 border p-4">
          <p className='discriptionPara' > A habit tracker app is a digital tool that helps users monitor their daily routines, track progress, and stay committed to building new habits. With this app, you can set personal goals, log activities, and view your progress over time. The app provides reminders, motivational insights, and streak tracking to encourage consistency. </p>
          <p className='discriptionPara'>It's an all-in-one solution for improving productivity, health, and well-being by reinforcing positive habits and reducing negative ones. Additionally, you can visualize trends, adjust targets, and celebrate milestones to stay motivated on your self-improvement journey.</p>
        </div>
      </div>
    </div>
  )
}

export default DiscriptionBox