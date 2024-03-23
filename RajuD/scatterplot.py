from matplotlib import pyplot as plt

def main():
    time_studied = [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
    average_scores = [17.1, 6.4, 9.2, 15.1, 14.2, 18.2, 20.3, 16.6, 15.9, 21.3]
    quizes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    xs = [ i for i, _ in enumerate(quizes)]

    plt.plot( xs, time_studied, 'y--', label='time studied')
    plt.plot( xs, average_scores, 'g:', label='average scores')
    #plt.plot( xs, water, 'b-', label='water')
    plt.legend(loc=6)
    plt.xlabel('Time Studied')
    plt.ylabel('Quiz Scores')
    plt.title('Time Studying vs. Quiz Scores')
    plt.xticks( xs, quizes)  # xs is used for plotting, but this line substitutes months for xs
    plt.show()
main()