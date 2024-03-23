import matplotlib.pyplot as plt

# Sample student data (study time in hours and corresponding grades)
time_studied = [30, 60, 90, 120, 150, 180, 210, 240, 270, 30]
average_scores = [60, 65, 70, 75, 80, 85, 90, 95, 100, 105]  # Just arbitrary values for demonstration

# Create scatter plot
plt.figure(figsize=(8, 6))
plt.scatter(time_studied, average_scores, color='blue', alpha=0.5)

# Add labels and title
plt.title('Student Grades vs Study Time')
plt.xlabel('Study Time (hours)')
plt.ylabel('Grades')

# Add gridlines
plt.grid(True)

# Display the plot
plt.show()