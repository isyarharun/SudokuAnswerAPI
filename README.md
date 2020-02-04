to run server and run test
1. install all dependencies using `yarn`
2. please make sure port 4000 is empty or you can change the port in .env file
3. run server `npm run dev`
4. run unit test `npm run test`

API documentation\\
API URL : localhost:4000/answer/check\
Method: POST\
Request Body :\
{\
	"sudokuAnswer" : array
}\
The input params are mandatory. `sudokuAnswer` must contains 9x9 arrays of answer.
Request Body Example :\
{\
	"sudokuAnswer" :[
    [5, 3, 2, 9, 8, 6, 7, 4, 1],
    [4, 8, 7, 2, 1, 5, 3, 6, 9],
    [6, 9, 1, 4, 3, 7, 5, 8, 2],
    [3, 2, 5, 1, 7, 4, 8, 9, 6],
    [7, 6, 4, 3, 9, 8, 1, 2, 5],
    [8, 1, 9, 5, 6, 2, 4, 3, 7],
    [1, 5, 6, 8, 2, 3, 9, 7, 4],
    [9, 7, 8, 6, 4, 1, 2, 5, 3],
    [2, 4, 3, 7, 5, 9, 6, 1, 8]
    ]\
}\
Response : \
200 (OK) \
{\
    "message": "Great, you solved the sudoku"\
}

400 (bad request) input params are wrong\
{\
    "error": "errorMessage"\
}

500 (internal server error)\
{\
    "error": "errorMessage"\
}
