# Building a Library with JSON

We are using the "JavaScript Object Notation" (JSON) to dynamically generate a library. The books are read in via a JSON file and automatically displayed. We use 'templates' to standardize the representation of all books.

1. Copy the code from GitHub (Ctrl-Shift-P, then Git: Clone) into your working folder.

2. Add a new book to the JSON file. Make sure to use the correct syntax (curly braces, commas, etc.).

3. We assign a unique class `book` to each `div` that encompasses a book. We will represent them as follows:
    - Set `padding` to 10px everywhere.
    - Set `margin-bottom` to 10px.
    - The width of the entry is set to 30% of the view width.
    - The minimum width is set to `max-content`.
    - Add a shadow (`box-shadow`) to the entry.
    - Insert CSS code so that the shadow becomes darker when hovering over the entry.

4. Years using the 'Courier' monospace font.

5. In the `generateBookList` function, add a condition: If a book has a year of publication older than 1945, the year should be written in red font.
