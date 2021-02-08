# Error Handling Notes

An Error Boundary was placed to catch javascript errors that would occur inside of the boundary, but the purpose of this document would be to go further into where or how errors could occur in the application.

## Possible Error Areas

### Textfield submission

In my case, I did validation which checked for empty fields, empty strings/values and for credit scores/income to be of a valid number. In a fully built application, the text validation would most likely have to use some sort of already built validation library that works well with the textfield library that the developer is using. Instances of special characters or other non string/number characters would have to be either removed on submission or forbidden from typing in the first place. My solution was to indicate the type which limits a user to typing a string or number depending on the fields needs.

### Routing based on LandingPage results

In my application, the user could go to the NewAccount page without having to enter the appropriate values in LandingPage.
In a fully built application, I would have to implement a solution where redux state or a cookie remembers that the user has already tried entering their data and succeeded/failed. This could also be submitted to a database so when a user tries to submit their information, the database could be searched to see if a record for that user already exists. This would prevent the user from directly being able to go to the NewAccount or Disqualification pages.
