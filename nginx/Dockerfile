FROM docker-registry.pxfd.tech/nginx:1.20.1_10

ARG GIT_COMMIT
ARG GIT_BRANCH
ARG APP_VERSION

ENV NGINX_DEF_CONF_LOC_FONT_FORMATS=true

ENV GIT_COMMIT=${GIT_COMMIT} \
    GIT_BRANCH=${GIT_BRANCH} \
    APP_VERSION=${APP_VERSION}

LABEL description="This is nginx container" \
      container_git_commit=${GIT_COMMIT} \
      container_git_branch=${GIT_BRANCH} \
      app_version=${APP_VERSION}

#COPY build/docker/nginx/confd/templates/conf.d/default.override.tmpl /etc/confd/templates/conf.d/default.override.tmpl

ADD --chown=www-data:www-data . /srv/www/
