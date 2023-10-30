Feature: Login

  Scenario Outline: Successs Login
    Given login "<organization>"
    When credentials "<userName>" "<password>"
    Then home page


    Examples: 
      |organization     | userName                   | password      |
      |Prod             | premexprod@99minutos.com   | 99Minutos.com |

