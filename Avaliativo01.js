class Exam {
    constructor(answer, weight) {
      this.weight = weight;
      this.answer = answer;
      this.exams = [];
    }
  
    add(exam) {
      this.exams.push(exam);
    }
  
    avg() {
      let totalScore = 0;
      let totalWeight = 0;
      for (let i = 0; i < this.exams.length; i++) {
        if (this.exams[i] === this.answer[i]) {
          totalScore += this.weight[i];
        }
        totalWeight += this.weight[i];
      }
      return (totalScore / totalWeight) * 10;
    }
  } 

const weights = [2, 2, 2, 2, 2];
const answers = ['a', 'b', 'a', 'c', 'd'];
const studentAnswers = ['a', 'b', 'a', 'c', 'd'];

const exam = new Exam(answers, weights);
studentAnswers.forEach(answer => exam.add(answer));

console.log("Nota do aluno:", exam.avg());