# jsonFLow - JSON API Formatter

This project is a React-based web application that allows users to format JSON data, convert it into various formats (like CSV), and download the formatted data. It's an ideal tool for developers who need to quickly inspect and manipulate JSON data.

[Visit website ↗️](https://jsonflow.vercel.app)

## Features

- **JSON Formatting**: Paste JSON data and get it formatted with customizable indent spacing.
- **Conversion to CSV**: Convert JSON data into CSV format using PapaParse and download the file.
- **Load JSON from URL**: Fetch JSON data directly from a URL and format it.
- **Customizable Indentation**: Choose the amount of indent spacing for your formatted JSON.
- **Error Handling**: Basic error handling for invalid JSON input and fetch failures.

## Technologies Used

- **React.js**: Frontend framework for building the UI.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **PapaParse**: JavaScript library for parsing CSV data and converting JSON to CSV.
- **Fetch API**: To fetch JSON data from external URLs.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/akshatbhj/jsonflow
   ```

2. **Navigate to the project directory**:

   ```bash
   cd jsonflow
   ```

3. **Install the dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. **Open your browser**:

   Navigate to `http://localhost:PORT` to view the application.

## Usage

### Formatting JSON

1. **Paste JSON Data**: Enter or paste your JSON data into the provided text area.
2. **Choose Indentation**: Select the amount of indent spacing you want for formatting.
3. **View Formatted JSON**: The formatted JSON will be displayed in the output container.

### Converting JSON to CSV

1. **Enter JSON Data**: Paste or load JSON data from a URL.
2. **Click on "Convert Data"**: The JSON will be converted into CSV format.
3. **Download the CSV**: Click the "Download" button to download the converted CSV file.

### Loading JSON from URL

1. **Click "Fetch JSON"**: Enter a URL from which to fetch JSON data.
2. **Submit**: The fetched JSON data will be displayed and can be formatted or converted.

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue to improve the project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or suggestions, feel free to reach out:

- **GitHub**: [akshatbhj](https://github.com/akshatbhj)
- **Email**: info.bhardwajakshat@gmail.com
