# Tar, Gzip & Archiving

Because nobody can remember the flags for `tar` without searching.

## Creating Archives

```bash
# Create .tar.gz (Tape Archive compressed with Gzip)
# c = create, z = gzip, v = verbose, f = filename
tar -czvf archive-name.tar.gz /path/to/directory

# Create standard .zip
zip -r archive-name.zip folder/
```

---

## Extracting Archives

```bash
# Extract .tar.gz to current directory
# x = extract, z = gzip, v = verbose, f = filename
tar -xzvf archive-name.tar.gz

# Extract to a specific directory (-C)
tar -xzvf archive-name.tar.gz -C /target/directory/

# Extract .tar.bz2 (j flag instead of z)
tar -xjvf archive-name.tar.bz2

# Extract standard .zip
unzip archive-name.zip -d /target/directory/
```

---

## Viewing contents without extracting

```bash
# t = list contents
tar -ztvf archive-name.tar.gz
unzip -l archive-name.zip
```
