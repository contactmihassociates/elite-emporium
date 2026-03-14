$port = if ($env:PORT) { [int]$env:PORT } else { 3000 }
$root = 'C:\Users\LENOVO\Desktop\code\elite emporium'

$listener = [System.Net.HttpListener]::new()
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Listening on http://localhost:$port/"
[Console]::Out.Flush()

$mimeTypes = @{
  '.html' = 'text/html; charset=utf-8'
  '.css'  = 'text/css'
  '.js'   = 'application/javascript'
  '.json' = 'application/json'
  '.png'  = 'image/png'
  '.jpg'  = 'image/jpeg'
  '.jpeg' = 'image/jpeg'
  '.gif'  = 'image/gif'
  '.svg'  = 'image/svg+xml'
  '.ico'  = 'image/x-icon'
  '.webp' = 'image/webp'
}

while ($listener.IsListening) {
  try {
    $ctx  = $listener.GetContext()
    $req  = $ctx.Request
    $resp = $ctx.Response

    try {
      $urlPath = $req.Url.AbsolutePath
      if ($urlPath -eq '/') { $urlPath = '/index.html' }

      $filePath = Join-Path $root ($urlPath.TrimStart('/').Replace('/', '\'))

      if (Test-Path $filePath -PathType Leaf) {
        $ext  = [System.IO.Path]::GetExtension($filePath).ToLower()
        $mime = if ($mimeTypes[$ext]) { $mimeTypes[$ext] } else { 'application/octet-stream' }
        $bytes = [System.IO.File]::ReadAllBytes($filePath)
        $resp.ContentType     = $mime
        $resp.ContentLength64 = $bytes.Length
        $resp.StatusCode      = 200
        $resp.OutputStream.Write($bytes, 0, $bytes.Length)
      } else {
        $resp.StatusCode = 404
      }
    } catch {
      $resp.StatusCode = 500
    } finally {
      try { $resp.OutputStream.Close() } catch {}
    }
  } catch {
    # Listener was stopped or context failed — continue
    if (-not $listener.IsListening) { break }
  }
}
