# SSH Keys for GitHub Setup

Step-by-step for setting up SSH auth on a fresh Linux/Mac/WSL machine so I stop typing tokens.

## 1. Generate Ed25519 key (Modern standard, better than RSA)

```bash
ssh-keygen -t ed25519 -C "myemail@example.com"
# Press enter for default file location (~/.ssh/id_ed25519)
# Optional: enter a passphrase for security
```

## 2. Start ssh-agent and add key

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

## 3. Copy public key to clipboard

```bash
# Linux (with xclip)
xclip -selection clipboard < ~/.ssh/id_ed25519.pub

# Or just print and copy manually
cat ~/.ssh/id_ed25519.pub
```

Paste into: GitHub -> Settings -> SSH and GPG keys -> New SSH key.

## 4. Test connection

```bash
ssh -T git@github.com
# Should output: Hi <username>! You've successfully authenticated...
```

## 5. Convert existing HTTPS repo to SSH

```bash
git remote set-url origin git@github.com:<username>/<repo>.git
git remote -v
```
