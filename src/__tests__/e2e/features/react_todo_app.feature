Feature: React ToDo App


    Scenario: Adding a new ToDo
        Given I am on the ToDo website
        When I enter a new ToDo item "Buy groceries"
        And I press the "Add ToDo" button
        Then the ToDo list should contain "Buy groceries"
