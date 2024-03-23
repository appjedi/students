from matplotlib import pyplot as plt

def main():
    time_studied = [30, 60, 90, 40.00, 47.85, 70.05, 100.10, 115.49, 94.85, 81.25]
    average_scores = [110.75, 115.85, 101.25, 73.25, 61.31, 45.18, 42.61, 40.15, 48.85, 57.75]
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