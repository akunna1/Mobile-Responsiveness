p-6 md:p-10 lg:p-20:
  - p-6: Padding of 1.5rem (24px) for small screens
  - md:p-10: Padding of 2.5rem (40px) for medium screens and larger
  - lg:p-20: Padding of 5rem (80px) for large screens and larger

grid grid-cols-1 lg:grid-cols-5:
  - grid: Uses CSS Grid layout
  - grid-cols-1: Creates a single-column grid for small screens
  - lg:grid-cols-5: Creates a five-column grid for large screens and larger

lg:col-span-2:
  - lg:col-span-2: For large screens and up, spans 2 of the 5 grid columns, making it 40% width

lg:col-span-3:
  - lg:col-span-3: For large screens and up, spans 3 of the 5 grid columns, making it 60% width

flex justify-center items-center:
   - flex: Uses Flexbox layout
   - justify-center: Centers content horizontally
   - items-center: Centers content vertically

flex flex-col justify-center space-y-4:
  - flex: Uses Flexbox layout
  - flex-col: Arranges children in a column
  - justify-center: Centers content vertically
  - space-y-4: Adds vertical spacing of 1rem (16px) between elements

More about the grids uses:
  - grid-cols-1: Defines a single-column grid layout for small screens by default. This makes each child element occupy the full width of the container
  - lg:grid-cols-5: Changes the grid layout to five columns for large screens and larger (starting at 1024px wide). This makes the child elements arrange themselves into five columns, allowing for more complex and responsive layouts
