# "Check in dance" with Feature Branching

### Process to follow when picking up a new card and pushing changes
1. Starting on `main` branch, run tests & app

2. Pull recent changes `git pull --rebase`

3. Run tests & app

4. Make and switch to feature branch `git checkout -b cardNumber-branch-name`

5. Make changes using TDD (red, green, refactor)

6. Run tests & app

7. Commit to local feature branch
    1. Add files in git stage area `git add <filename> -A` or `git add -p`
    2. Commit files `git commit -m "AUTHORS - CARD_NUMBER - your commit message"`

9. Pull recent changes `git pull origin cardNumber-branch-name --rebase` to ensure you are up to date with the latest version of your branch

10. Fix files with conflicts (If there are merge conflicts)
    1. `git add <fixed files>`
    1. `git rebase --continue`

11. Run tests & app

12. Push `git push`


### Keeping your existing feature branch up to date
You should do this frequently to build off the latest state of the application
1. Starting on `main` branch, pull changes `git pull --rebase`

2. Run tests & app

3. Switch to feature branch `git checkout cardNumber-branch-name`

4. Rebase main branch onto feature branch `git rebase main`
   
5. Fix files with conflicts (If there are merge conflicts)
    1. `git add <fixed files>`
    1. `git rebase --continue`

6. Run tests & app


Note: after rebasing an existing branch with main, when you go to `push` your branch to Github you will likely get an error because your commit history on your local feature branch has changed and is out of sync with the commit history of the branch in Github. In this case you will need to run `git push origin cardNumber-branch-name -f` to force the push. 

Caution: force pushing will overwrite what is in Github for that branch, make sure you only force push to your branch when you are ready to overwrite the remote (Github) feature branch
