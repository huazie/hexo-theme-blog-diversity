# Diversity
A multi-theme that allows for free switching for [Hexo].

## Install

Execute the following command and modify `theme` in `_config.yml` to `diversity`.

```
git clone --depth 1 https://github.com/huazie/hexo-theme-diversity themes/diversity
```

``` diff
_config.yml
- theme: other-theme
+ theme: diversity
```

## Update

Execute the following command to update Diversity.

```
cd themes/diversity
git pull
```

## Config

### Diversity Theme Config

Copy the `_config.diversity.yml` located in the `themes/diversity` to the root directory of your Hexo project.

```
themes: [landscape,light,phase]

#ports: [5000,5001,5002]
```

- **themes** - Multi-theme List
- **ports** - A list of multi-theme server ports (not configured, default starting from 4001), used for locally starting HTTP services corresponding to each theme with `hexo server`.


### Other Theme Config

Add a `config` directory in the root directory of your Hexo project. 

For each theme in the aforementioned multi-theme list, create a configuration directory with the corresponding theme name.

And within that configuration directory, add a corresponding `_config.yml` file (you can simply copy one from the original `_config.yml` located in your project's root directory). The structure would be something like this:

```pre
├─config
│  ├─landscape
│  │  ├─_config.yml
│  ├─light
│  │  ├─_config.yml
│  ├─phase
│  │  ├─_config.yml
```

To modify the `_config.yml` file in each theme's directory, taking **landscape** as an example:

``` diff
_config.yml
- url: http://example.com
+ url: http://example.com/landscape

- public_dir: public
+ public_dir: public/landscape

- theme: other-theme
+ theme: landscape
```