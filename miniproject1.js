function calculateGPA(arr){
    let sum = 0;
    for (let i =0; i<arr.length; i++){
        let grade= arr[i];
        let number_grade = 0;
        if (grade=== 'A')
        {
            number_grade=100;
        }
        else if (grade==='B')
        {
            number_grade=80;
        }
        else if(grade==='C')
        {
            number_grade=70;
        }
        sum = sum+number_grade;
    }

    let gpa = sum/arr.length;
    let letter_grade = '';

    if (gpa>=90 && gpa<=100)
    {
        letter_grade='A';
    }
    else if (gpa>=76 && gpa<=89)
    {
        letter_grade='B'
    }
    else
    {
        letter_grade='C'
    }
    return letter_grade

}
let arr = ['A','B','C','B','A','B','C'];
document.write('Your GPA is '+ calculateGPA(arr));
