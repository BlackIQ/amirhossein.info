git add -A
git commit -m "New build."
git push

npm run build

tar -czvf next.tar.gz .next

scp -r next.tar.gz root@np.amirhossein.info:/apps/amirhossein/resume/client