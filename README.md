# trumped
Succeed in the face of overwhelming failure!

```
> var trumped = require('./index');
undefined
> function election() {
... throw 'racist comments';
... throw 'sexist comments';
... throw 'illiterate comments';
... throw 'nazi salutes';
... return 'Make America Great Again!';
... }
undefined
> var trumpedElection = trumped(election);
undefined
> election()
racist comments
> trumpedElection()
'Make America Great Again!Make America Great Again!Make America Great Again!Make America Great Again!Make America Great Again!Make America Great Again!Make America Great Again!Make America Great Again!Make America Great Again!Make America Great Again!Make America Great Again!Make America Great Again!Make America Great Again!Make America Great Again!Make America Great Again!Make America Great Again!'
>
```
