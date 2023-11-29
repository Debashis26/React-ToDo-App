Feature: React ToDo App


    Scenario: Adding a new ToDo
        Given I am on the ToDo website
        When I enter a new ToDo item "Buy groceries"
        And I press the "Add ToDo" button
        Then the ToDo list should contain "Buy groceries"

    Scenario: Adding a new ToDo with empty task
        Given I enter an empty ToDo item
        When I press the "Add ToDo" button
        Then the ToDo list should not contain an empty task

   
    Scenario: Deleting a ToDo task
        Given I added a ToDo item "check task for delete"
        When I click the "Delete" icon
        Then the ToDo list should not contain "check task for delete"
