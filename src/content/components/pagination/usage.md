## Usage

Generally, Pagination is used if there are more than 25 items displayed in one view. The default number displayed will vary depending on the context.

## Best practices

### Identify the current page

Clearly identify which page the user is on by displaying the current page number. By providing context into how many pages there are in total (eg. 1 of 4 pages), you can help provide clarity around the data displayed.

### Provide various options for navigating

**Previous** and **next** chevrons are the most useful way for the user to move forward or backward through pages of data. Provide a [Text Input](/components/text-input) in which users can input the page they wish to navigate to.

---
***
> 
![Pagination example](images/pagination-usage-1.png)

### Items per page

Use a small select within the Pagination bar so the user can change the amount of data displayed per page.

---
***
> 
![Pagination with small select](images/pagination-usage-2.png)
