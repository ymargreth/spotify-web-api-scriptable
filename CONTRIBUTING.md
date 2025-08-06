# Contributing

Feel free to send your PR to fix any bug or add new functionality!
Follow these steps:

1. Fork the repository.
2. Make the changes. Follow the coding standards define in the [ESLint configuration file](./.eslintrc.json)
3. Remember to add tests. Have a look at the [`__test__` folder](./__test__/) to see the test
   suite covering the code. Want to run the tests? Run `npm test`. You will also get a code coverage report for free.
4. Send a Pull Request.

# Releasing a new version

1. Update npm module version in the [`package.json` file](./package.json), using `npm version`
2. Push with tags: `git push --follow-tags`
3. Draft a new release
4. Publish a new npm package: `npm publish`
5. ????
5. Profit

Thanks for collaborating!
