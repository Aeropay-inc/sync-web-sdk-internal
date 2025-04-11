#!/bin/bash

if [ "$#" -ne 1 ]; then
    echo "Usage: $0 <environment>"
    echo "Environment must be one of: qa, staging, prod"
    exit 1
fi

ENV=$1

case "$ENV" in
    qa)
        SECRET_NAME="arn:aws:secretsmanager:us-east-1:654654287847:secret:ap-sync-ui-build-config-qa-oSWMyp"
        ENV_FILE=".env.qa" 
        ;;
    staging)
        SECRET_NAME="arn:aws:secretsmanager:us-east-1:654654287847:secret:ap-sync-ui-build-config-staging-9tept2"
        ENV_FILE=".env.staging"
        ;;
    sandbox)
        SECRET_NAME="arn:aws:secretsmanager:us-east-1:654654287847:secret:ap-sync-ui-build-config-sandbox-1XiVnS"
        ENV_FILE=".env.sandbox"
        ;;        
    prod)
        SECRET_NAME="arn:aws:secretsmanager:us-east-1:654654287847:secret:ap-sync-ui-build-config-prod-lBZ66g"
        ENV_FILE=".env.production"
        ;;
    *)
        echo "Invalid environment: $ENV. Valid environments are: qa, staging, prod."
        exit 1
        ;;
esac

REGION="us-east-1"

SECRETS=$(aws secretsmanager get-secret-value --secret-id "${SECRET_NAME}" --region "${REGION}" --query SecretString --output text)

if [ $? -eq 0 ]; then
    echo "Secrets fetched successfully."
else
    echo "Failed to fetch secrets."
    exit 1
fi


echo "$SECRETS" | jq -r "to_entries|map(\"\(.key)=\(.value|tostring)\")|.[]" >> $ENV_FILE

echo "Secrets written to $ENV_FILE."