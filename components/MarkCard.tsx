import React from 'react'

const MarkCard = (CAMarks:any) => {
    // "courseCode": mark.courseCode,
    // "courseTitle": mark.courseTitle,
    // "ca1": mark.ca1,
    // "ca2": mark.ca2,
    // "ca3": mark.ca3,
    // "bestOfCA": mark.bestOfCA,
    // "at1": mark.at1,
    // "at2": mark.at2,
    // "ap": mark.ap,
    // "total": mark.total,
    const [courseCode, courseTitle, ca1, ca2, ca3, bestOfCA, at1, at2, ap, total] = CAMarks;

  return (
    <div>
        <p>{courseCode}</p>
        <p>{courseTitle}</p>
        <p>{ca1}</p>
        <p>{ca2}</p>
        <p>{ca3}</p>
        <p>{bestOfCA}</p>
        <p>{at1}</p>
        <p>{at2}</p>
        <p>{ap}</p>
        <p>{total}</p>
        
    </div>
  )
}

export default MarkCard