Two Attack Vectors my Contract Addresses:
SWC-135 Code with No Effects
https://swcregistry.io/docs/SWC-135
The contracts YourContract and PTBallot do not use any irrelevant code, and every public variable is purposed to be used for getters (testing), and the functions and their return values are inherently useful for data availability and contract reusability. 

SWC-119 Shadowing State Variables
https://swcregistry.io/docs/SWC-119
The contracts YourContract and PTBallot do not define any state variables until they are used in functions or used in the constructor, which prevents state variables from being shadowed.
