// Functions for parsing content for badges. Used globalThis to make these functions accessible in content.js
globalThis.getExperience = (text) => {
    /*
    Input: Job Description 
    Parses the job description to find the maximum number of years of experience required.
    Return: Maximum number of years of job experience required
    */
    var pattern = /[0-9]*[\s]*[\-]*[\s]*[0-9]+[\+]*[\s]*[or\smore]*[\s]*years/g;
    var result = text.match(pattern);
    var maxNum = parseInt("0")
    var maxIdx = 0
    if (result == null){
        result = "N/A"
        return result;
    }
    if (result.length > 1 ){   

        for (i = 0; i < result.length; i++) {
            num = result[i].match(/\d+/)[0];
            if (num > maxNum){
                maxNum = num
                maxIdx = i
            }
        }
    }

    return result[maxIdx];
};

globalThis.getSponsorship = (text) => {
    /*
    Input: Job Description 
    Parses the job description to find if company provides sponsorship or not.
    Return: Yes or Available
    */

    var pattern = /(U[/.]*S Citizens|No sponsorship|No Sponsorship)/g;
    var result = text.match(pattern);
    if (result == null){
            result = "Available"
    }else{
        result = "Yes"
    }
    return result;
};

globalThis.getDegree = (text) => {
    /*
    Input: Job Description 
    Parses the job description what degree is required.
    Return: Degree requirement(e.g. Masters, Bachelors)
    */
    var pattern = /(Master[\'s]*[\s]+|Bachelor[\'s]*[\s]*|M[\.]*s[\s]+|B[\.]*S[\s]+|BA[\s]*|Postdoctoral[\s]+|PhD[\s]+)/g;

    var result = text.match(pattern);
        
    if (result == null){
            result = "N/A"
        }
    return result ;
};

globalThis.getRemote = (text) => {
    /*
    Input: Job Description 
    Parses the job description to know if remote work is allowed.
    Return: Yes or N/A 
    */
    var pattern = /(work from home|remote work)/g;
    var result = text.match(pattern);
    if (result == null){
            result = "N/A"
        }else{
        result = "Yes"
        }
    return result;
};

// This line might throw an error in chrome extensions but the extension should still work
module.exports = {getExperience,getSponsorship,getDegree,getRemote};
