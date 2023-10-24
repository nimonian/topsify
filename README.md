# Topsify

This is my Topsify app!

## Notes

### Creating your local repo

`cd` into the root folder of your project and type

```bash
git init
```

If you browse this folder with "hidden files" shown, you will see a `.git` in
the project root which tells you that this folder is now being tracked by git!

### Adding your remote repo

Once you create a repo remotely, such as on github, you can run

```bash
git remote add origin <url>
```

replacing `<url>` with the real url of your repo. The word `origin` here is the
name we're giving to the remote repo - you can choose other things, but `origin`
is traditional.

There is a good chance that your local main branch is called `master` because
that was once the default for git. However, github now uses `main` by default.
To change the name of your local branch, make sure you have the `master` branch
active, then you can run

```bash
git branch -M main
```

The `-M` flag is short for `move`, but rest assured, this really just renames
the current branch to `main` it doesn't actually move it anywhere.

Finally, we can run

```bash
git push -u origin main
```

This will actually push the changes you've made to the remote branch called
`main`. The `-u` flag is short for `--set-upstream` and it connects your local
`main` branch to the remote `main` branch. Because the branches are now
connected, you can just run

```bash
git push
```

or

```bash
git pull
```

from now on whenever you're on the local `main` branch and the changes will
automatically pull/push from the remote `main` branch without having to specify
it with `origin main`.

### Making a new branch

To make a new branch called `dev` locally, we can do

```bash
git branch dev
```

and then to switch to that branch, we would do

```bash
git checkout dev
```

We can actually create and switch to a new branch in a single command by using

```bash
git checkout -b dev
```

Now, we can make some changes to our codebase such as adding new features or
fixing bugs, whatever it is you need to do! If you added any new files to the
project, we need to run

```bash
git add .
```

to make sure they're being tracked by git. Then, we commit the changes with

```bash
git commit -a -m "write a commit message"
```

All we've done is committed the changes locally. You won't see them on github,
and if you switch back to the `main` branch you won't see the changes there
either!

### Push changes from your branch

To push your committed changes from your `dev` branch to the remote repo, you
can run

```bash
git push -u origin dev
```

This will push your changes to a remote branch called `dev` and, again, the `-u`
flag will set `origin/dev` as the upstream of `dev`, so the remote and local
branches are connected.

### Get a branch someone has made

If you're in a team and someone has added a branch to a remote, you might want
to get that branch! In this case, you should run

```bash
git fetch
```

to download a list of all the remote branches, then

```bash
git branch -r
```

to list the remote branches and choose the one you want to download.

Finally, to get the branch, you should run

```bash
git checkout -t origin/foobar
```

This will create a local branch called `foobar` which contains all the files
from the remote branch `origin/foobar`. The `-t` flag does very similar to the
`-u` flag earlier - it sets up tracking between local and remote branches.

Commit some changes and `git push` them!
