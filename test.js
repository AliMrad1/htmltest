exports.handler = async (event) => {
    const body = JSON.parse(event.body);
    const studentCode = body.code;
    const midtermScore = body.midterm;
    const finalScore = body.final;
    
    // Calculate the total score and the final grade
    const totalScore = (0.4 * midtermScore) + (0.6 * finalScore);
    let grade = "";
    
    if (totalScore >= 60) {
        // store in Dynamo db (StudentCode, MidtermExam, FinalExam and FinalGrade)
    } else {
        // Comment which will take the value of "failed"
    }
    
    // Return the grade as a JSON response
    const response = {
        statusCode: 200,
        body: JSON.stringify({ grade: grade }),
    };
    
    return response;
};