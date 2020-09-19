# Git Internals and SHA

- [Git Internals and SHA](#git-internals-and-sha)
  - [Some Git Terms](#some-git-terms)
  - [Basic Git Workflow](#basic-git-workflow)
  - [Git Basics](#git-basics)
    - [A very good guide to Git basics](#a-very-good-guide-to-git-basics)
    - [Command Reference](#command-reference)
  - [How does Git work?](#how-does-git-work)
    - [Git objects](#git-objects)
      - [Blob](#blob)
      - [Tree](#tree)
      - [Commit](#commit)
      - [Ref (aka tag, branch, etc.)](#ref-aka-tag-branch-etc)
      - [Read more](#read-more)
    - [Git and Graphs](#git-and-graphs)
    - [SHA1](#sha1)
      - [But isn't SHA1 insecure?](#but-isnt-sha1-insecure)
    - [Content is King](#content-is-king)

## Some Git Terms

- Untracked files: New files that Git has not tracked.
- Working area: Modified files/changes that are un-committed.
- Staging area: Modified files/changes that are marked to go into the next commit.
- Local repo: Local copy of the repository
- Remote repo: Hosted repository on GitHub, GitLab, etc.

## Basic Git Workflow

![Git Workflow](images/git-workflow.png)
Image source: *https://backlog.com/git-tutorial/git-workflow/*

## Git Basics

Here is a cool webapp to visualizing Git stuffs: http://git-school.github.io/visualizing-git/

### A very good guide to Git basics

[Pro Git - Chapter 2](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)

### Command Reference

[Pro Git - A3.2 Appendix C](https://git-scm.com/book/en/v2/Appendix-C%3A-Git-Commands-Getting-and-Creating-Projects)

## How does Git work?

Inside Git, everything is an object.

### Git objects

Everything in Git is represented in a few basic objects stored in the file system in the `.git` directory.

#### Blob

- Data (code, pictures, etc.)

#### Tree

- Pointers to files, content and other trees

![Git Workflow](images/git-tree.png)
Image source: *https://git-scm.com/book/en/v2/Git-Internals-Git-Objects*

#### Commit

- Author
- Message
- Pointer to a tree
- Pointer to parent

![Git Workflow](images/git-commit.png)
Image source: *https://git-scm.com/book/en/v2/Git-Internals-Git-Objects*


#### Ref (aka tag, branch, etc.)

- Pointer to a commit

![Git Workflow](images/git-ref.png)
Image source: *https://git-scm.com/book/en/v2/Git-Internals-Git-References*

#### Read more

- [Pro Git - 10.2 Git Internals - Git Objects](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects)
- [Pro Git - 10.3 Git Internals - Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)

### Git and Graphs

A Git repository is essentially a giant [directed acyclic graph (DAG)](https://en.wikipedia.org/wiki/Directed_acyclic_graph).

### SHA1

Every object is stored on disk and has a SHA-1 hash as the filename.

#### But isn't SHA1 insecure?

Yes, but that does not matter in this context. Git uses SHA1 to keep track of data and check integrity. It is still a good hashing algorithm with a very-very low collision rate. 

### Content is King

Git is very smart. It does not keep track of files, it keeps track of the content. If you create 1000000000000 files with the same content, it will only create 1 blob. Also works if you create 2 files with the same content. :wink:

## Learn more about Git

- https://github.com/pluralsight/git-internals-pdf
- http://rogerdudler.github.io/git-guide/
- https://matthew-brett.github.io/curious-git/index.html
- http://git-school.github.io/visualizing-git/
- https://git-scm.com/book/en/v2
- https://git-scm.com/docs
