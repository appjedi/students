from matplotlib import pyplot as plt

def main():
    electric = [45.25, 46.85, 46.23, 40.00, 47.85, 70.05, 100.10, 115.49, 94.85, 81.25, 64.35, 55.00]
    gas = [ 110.75, 115.85, 101.25, 73.25, 61.31, 45.18, 42.61, 40.15, 48.85, 57.75, 88.81, 97.91 ]
    water = [ 40.00, 40.00, 40.00, 45.85, 65.15, 75.15, 81.15, 82.13, 74.00, 63.82, 47.15, 40.00 ] 
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    xs = [ i for i, _ in enumerate(months)]

    plt.plot( xs, electric, 'y--', label='electric')
    plt.plot( xs, gas, 'g:', label='gas')
    plt.plot( xs, water, 'b-', label='water')
    plt.legend(loc=6)
    plt.xlabel('Months')
    plt.ylabel('Cost')
    plt.title('Smith Utilities')
    plt.xticks( xs, months)  # xs is used for plotting, but this line substitutes months for xs
    plt.show()
main()